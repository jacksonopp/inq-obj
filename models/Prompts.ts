export class Prompt {
   constructor(private name: string, private message: string) {}
}

export class List extends Prompt {
   private type: string = "list";
   constructor(name: string, message: string, private choices: string[]) {
      super(name, message);
   }
}

export class RawList extends Prompt {
   private type: string = "rawlist";
   constructor(name: string, message: string, private choices: string[]) {
      super(name, message);
   }
}

export class Expand extends Prompt {
   private type: string = "expand";
   constructor(name: string, message: string, private choices: string[]) {
      super(name, message);
   }
}

export class Checkbox extends Prompt {
   private type: string = "checkbox";
   constructor(name: string, message: string, private choices: string[]) {
      super(name, message);
   }
}

export class Confirm extends Prompt {
   private type: string = "confirm";
   constructor(name: string, message: string) {
      super(name, message);
   }
}
export class Input extends Prompt {
   private type: string = "input";
   constructor(name: string, message: string) {
      super(name, message);
   }
}

export class Password extends Prompt {
   private type: string = "password";
   constructor(name: string, message: string, private mask: string) {
      super(name, message);
   }
}
