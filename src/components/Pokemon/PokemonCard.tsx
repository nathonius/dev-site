/** @jsx jsx */
import React, { Fragment } from 'react';
import color from 'color';
import { Pokemon } from '../../../types/pokemon';
import { css, jsx } from '@emotion/core';
import { toTitleCase, typeColors } from '../../util/pokemon';
import { Small, Subheading } from '../Typography';
import { ThemeContext } from '../../store/ThemeContext';
import { Trash, EditPencil, Checkmark, Close } from '../Icons';
import { TransparentInput } from '../Common/TransparentInput';

interface PokemonCardProps {
  pokemon: Pokemon;
  updatePokemon: (updated: Pokemon) => void;
}

const typeContainerStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const PokemonCard: React.FC<PokemonCardProps> = props => {
  const { pokemon, updatePokemon } = props;
  const { space, textColor, typography } = React.useContext(ThemeContext);
  const [editing, setEditing] = React.useState<boolean>(false);
  const [nickname, setNickname] = React.useState<string>(pokemon.nickname);
  const nicknameInputRef = React.useRef<HTMLInputElement>(null);

  const typeTextStyle = css`
    text-transform: uppercase;
    margin: 0;
    padding: ${space.xxs} ${space.s};
    color: ${color('black').alpha(0.3).string()};
  `;

  const iconStyle = css`
    width: ${space.l};
    margin-right: ${space.s};
    fill: ${textColor.accentText};
    cursor: pointer;
    &:hover {
      fill: ${textColor.primaryText};
    }
  `;

  const edit = React.useCallback(() => {
    setNickname(pokemon.nickname);
    setEditing(true);
  }, [pokemon.nickname]);

  React.useEffect(() => {
    if (editing && nicknameInputRef.current) {
      nicknameInputRef.current.focus();
    }
  }, [editing]);

  const save = React.useCallback(() => {
    const newPokemon = { ...pokemon };
    if (nickname && nickname !== '') {
      newPokemon.nickname = nickname;
    } else if (nickname === '') {
      newPokemon.nickname = undefined;
    }
    updatePokemon(newPokemon);
    setEditing(false);
  }, [nickname, pokemon, updatePokemon]);

  const nicknameChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  }, []);

  const sprite =
    pokemon.shiny && pokemon.sprites.front_shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default;
  const background =
    pokemon.types.length === 2
      ? `linear-gradient(to right, ${typeColors[pokemon.types[0].type.name]} 0%, ${
          typeColors[pokemon.types[0].type.name]
        } 50%, ${typeColors[pokemon.types[1].type.name]} 50%, ${typeColors[pokemon.types[1].type.name]} 100%)`
      : `${typeColors[pokemon.types[0].type.name]}`;

  return (
    <div
      css={css`
        background: ${background};
        position: relative;
        display: flex;
        align-items: center;
        border-radius: ${space.s};
        margin: ${space.s};
        padding: 0 ${space.s};
        max-width: 575px;
      `}>
      {sprite && (
        <img
          css={css`
            width: 96px;
            max-height: 96px;
          `}
          src={sprite}
          alt={pokemon.name}
        />
      )}
      {!sprite && (
        <div
          css={css`
            width: 96px;
            height: 96px;
          `}
        />
      )}
      <div
        css={css`
          margin-left: ${space.m};
        `}>
        {editing && (
          <TransparentInput
            ref={nicknameInputRef}
            css={css`
              font-size: ${typography.subheading.size};
            `}
            placeholder="Nickname"
            value={nickname}
            onChange={nicknameChange}
          />
        )}
        {!editing && (
          <Fragment>
            <Subheading
              css={css`
                margin: 0;
              `}>
              {pokemon.nickname ? pokemon.nickname : toTitleCase(pokemon.name)}
            </Subheading>
            {pokemon.nickname && (
              <Small
                css={css`
                  margin: 0;
                `}>
                {toTitleCase(pokemon.name)}
              </Small>
            )}
          </Fragment>
        )}
      </div>
      <div
        css={css`
          flex-grow: 1;
        `}
      />
      {editing && (
        <Fragment>
          <Checkmark css={iconStyle} onClick={save} />
          <Close css={iconStyle} onClick={() => setEditing(false)} />
        </Fragment>
      )}
      {!editing && (
        <Fragment>
          <EditPencil css={iconStyle} onClick={edit} />
          <Trash css={iconStyle} />
        </Fragment>
      )}
      {pokemon.types.length === 2 && (
        <div
          css={css`
            ${typeContainerStyle};
            display: flex;
          `}>
          <Small
            css={css`
              ${typeTextStyle};
              width: 50%;
              text-align: right;
            `}>
            {pokemon.types[0].type.name}
          </Small>
          <Small
            css={css`
              ${typeTextStyle};
              width: 50%;
            `}>
            {pokemon.types[1].type.name}
          </Small>
        </div>
      )}
      {pokemon.types.length !== 2 && (
        <div
          css={css`
            ${typeContainerStyle};
            text-align: center;
          `}>
          <Small css={typeTextStyle}>{pokemon.types[0].type.name}</Small>
        </div>
      )}
    </div>
  );
};
