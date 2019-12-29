import { Prompt } from "./Prompts";
import { expect, should } from "chai";
import "mocha";

describe("canary test in prompts", () => {
   it("should return true", () => {
      expect(true).to.true;
   });
});

describe("prompt objects", () => {
   it("should be an object", () => {
      const prompt = new Prompt("name", "type", "message");
      should();
      prompt.should.be.a("object");
   });

   it("should have a property 'name'", () => {
      const prompt = new Prompt("name", "type", "message");
      should();
      prompt.should.have.property("name");
   });

   it("should return a prompt object", () => {
      const prompt = new Prompt("name", "type", "message");
      expect(prompt).
   });
});
