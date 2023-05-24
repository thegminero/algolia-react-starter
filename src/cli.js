import arg from 'arg';
import inquirer from 'inquirer';
import { createProject } from './main';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '--appid': String,
      '--searchkey': String,
      '--indexname': String,
      '--qrysuggestindex': String,
      '-g': '--git',
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    appid: args['--appid'] || '',
    searchkey: args['--searchkey'] || '',
    indexname: args['--indexname'] || '',
    qrysuggestindex: args['--qrysuggestindex'] || '',
    template: args._[0],
    runInstall: args['--install'] || false,
  };
}

async function promptForMissingOptions(options) {
  const defaultTemplate = 'javascript';
  const defaultColor = 'indigo';
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
      maincolor: options.maincolor || defaultColor,
    };
  }

  const questions = [];
  
  if (!options.template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which project template to use',
      choices: ['javascript'],
      default: defaultTemplate,
    });
  }
  if (!options.maincolor) {
    questions.push({
      type: 'list',
      name: 'maincolor',
      message: 'Please choose a main theme color',
      choices: ['indigo', 'purple', 'blue', 'red', 'pink', 'green', 'yellow, lime', 'gray'],
      default: defaultColor,
    });
  }
  if (!options.appid) {
    questions.push({
      type: 'input',
      name: 'appid',
      message: 'Please enter your App ID'
    });
  }
  if (!options.searchkey) {
    questions.push({
      type: 'input',
      name: 'searchkey',
      message: 'Please enter your Search API Key'
    });
  }
  if (!options.indexname) {
    questions.push({
      type: 'input',
      name: 'indexname',
      message: 'Please enter your main product index name'
    });
  }
  if (!options.qrysuggestindex) {
    questions.push({
      type: 'input',
      name: 'qrysuggestindex',
      help: 'this is a help text',
      message: 'Please enter your query suggest index name'
    });
  }

  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Should a git be initialized?',
      default: false,
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answers.template,
    maincolor: options.maincolor || answers.maincolor,
    git: options.git || answers.git,
    appid: options.appid || answers.appid,
    searchkey: options.searchkey || answers.searchkey,
    indexname: options.indexname || answers.indexname,
    qrysuggestindex: options.qrysuggestindex || answers.qrysuggestindex
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
}