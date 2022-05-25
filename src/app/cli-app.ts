import { App } from '@beecode/msh-node-app'
import { ExecArgsAsCommand } from 'src/app/init/exec-args-as-command'

export class CliApp extends App {
  public constructor(args: string[]) {
    super(new ExecArgsAsCommand(args))
  }
}
