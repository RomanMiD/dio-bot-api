import { Hears, Wizard, WizardStep } from 'nestjs-telegraf';
import { actionButtons } from '../bot.buttons';
import { WizardContext } from 'telegraf/typings/scenes';

@Wizard('INTRO')
export default class SceneIntro {
  @WizardStep(1)
  async start(ctx: WizardContext) {
    await ctx.reply('Че будем делать?', actionButtons());
    await ctx.wizard.next()

  }
  @WizardStep(2)
  @Hears("hello")
  async hello2(ctx:WizardContext){
    await ctx.reply("ну здарова отец, это второй шаг визард сцены")
    await ctx.scene.leave()
  }
}
