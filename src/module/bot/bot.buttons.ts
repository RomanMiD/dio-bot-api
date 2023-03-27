import { Markup } from 'telegraf';
import { Commands } from './bot.cmd';

export const actionButtons = () => {
  return Markup.keyboard(
    [
      Markup.button.callback(Commands.connect, 'connect'),
    ],
    {
      columns: 1,
    },
  )
    .oneTime()
    .resize();
};

export const exitButton = () => {
  return Markup.keyboard([Markup.button.callback(Commands.back, 'back')])
    .oneTime()
    .resize();
};
