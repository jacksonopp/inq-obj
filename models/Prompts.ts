export class Prompt {
   private default: any;
   constructor(
      private name: string,
      private message: string,
      answerDefault?: any
   ) {
      this.default = answerDefault;
   }
}

export class List extends Prompt {
   private type: string = "list";
   constructor(
      name: string,
      message: string,
      private choices: string[],
      answerDefault?: any
   ) {
      super(name, message, answerDefault);
   }
}

export class RawList extends Prompt {
   private type: string = "rawlist";
   constructor(
      name: string,
      message: string,
      private choices: string[],
      answerDefault?: any
   ) {
      super(name, message, answerDefault);
   }
}

export class Expand extends Prompt {
   private type: string = "expand";
   constructor(
      name: string,
      message: string,
      private choices: string[],
      answerDefault?: any
   ) {
      super(name, message, answerDefault);
   }
}

export class Checkbox extends Prompt {
   private type: string = "checkbox";
   constructor(
      name: string,
      message: string,
      private choices: string[],
      answerDefault?: any
   ) {
      super(name, message, answerDefault);
   }
}

export class Confirm extends Prompt {
   private type: string = "confirm";
   constructor(name: string, message: string, answerDefault?: any) {
      super(name, message, answerDefault);
   }
}
export class Input extends Prompt {
   private type: string = "input";
   constructor(name: string, message: string, answerDefault?: any) {
      super(name, message, answerDefault);
   }
}

export class Password extends Prompt {
   private type: string = "password";
   constructor(
      name: string,
      message: string,
      private mask: string,
      answerDefault?: any
   ) {
      super(name, message, answerDefault);
   }
}
