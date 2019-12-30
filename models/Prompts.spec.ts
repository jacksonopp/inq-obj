import {
   Prompt,
   List,
   RawList,
   Expand,
   Checkbox,
   Confirm,
   Input,
   Password
} from "./Prompts";
import { expect, should } from "chai";
import "mocha";

describe("canary test in prompts", () => {
   it("should return true", () => {
      expect(true).to.true;
   });
});

describe("basic prompt objects", () => {
   it("should return a prompt object", () => {
      const prompt = new Prompt("name", "message");
      const prompt2 = new Prompt("tool", "a simple message");
      expect(prompt).to.deep.equal({
         name: "name",
         message: "message"
      });
      expect(prompt2).to.deep.equal({
         name: "tool",
         message: "a simple message"
      });
   });
});

describe("list prompt object", () => {
   it("should return a list object", () => {
      const list = new List("name", "message", ["choice 1", "choice 2"]);
      const list2 = new List("tool", "message", ["choice 1", "choice 2"]);

      expect(list).to.deep.equal({
         name: "name",
         message: "message",
         type: "list",
         choices: ["choice 1", "choice 2"]
      });
      expect(list2).to.deep.equal({
         name: "tool",
         message: "message",
         type: "list",
         choices: ["choice 1", "choice 2"]
      });
   });
});

describe("rawlist prompt object", () => {
   it("should return a rawlist object", () => {
      const rawList = new RawList("name", "message", ["choice 1", "choice 2"]);
      const rawList2 = new RawList("tool", "message", ["choice 1", "choice 2"]);

      expect(rawList).to.deep.equal({
         name: "name",
         message: "message",
         type: "rawlist",
         choices: ["choice 1", "choice 2"]
      });
      expect(rawList2).to.deep.equal({
         name: "tool",
         message: "message",
         type: "rawlist",
         choices: ["choice 1", "choice 2"]
      });
   });
});

describe("expand prompt object", () => {
   it("should return an expand object", () => {
      const expand = new Expand("name", "message", ["choice 1", "choice 2"]);
      const expand2 = new Expand("tool", "something", ["choice 1", "choice 2"]);

      expect(expand).to.deep.equal({
         name: "name",
         message: "message",
         choices: ["choice 1", "choice 2"],
         type: "expand"
      });
      expect(expand2).to.deep.equal({
         name: "tool",
         message: "something",
         choices: ["choice 1", "choice 2"],
         type: "expand"
      });
   });
});
describe("checkbox prompt object", () => {
   it("should return an expand object", () => {
      const checkbox = new Checkbox("name", "message", [
         "choice 1",
         "choice 2"
      ]);
      const checkbox2 = new Checkbox("tool", "something", [
         "choice 1",
         "choice 2"
      ]);

      expect(checkbox).to.deep.equal({
         name: "name",
         message: "message",
         choices: ["choice 1", "choice 2"],
         type: "checkbox"
      });
      expect(checkbox2).to.deep.equal({
         name: "tool",
         message: "something",
         choices: ["choice 1", "choice 2"],
         type: "checkbox"
      });
   });
});
describe("confirm prompt object", () => {
   it("should return a confirm object", () => {
      const confirm = new Confirm("name", "message");
      const confirm2 = new Confirm("tool", "a message");

      expect(confirm).to.deep.equal({
         name: "name",
         message: "message",
         type: "confirm"
      });
      expect(confirm2).to.deep.equal({
         name: "tool",
         message: "a message",
         type: "confirm"
      });
   });
});
describe("input prompt object", () => {
   it("should return a confirm object", () => {
      const input = new Input("name", "message");
      const input2 = new Input("tool", "a message");

      expect(input).to.deep.equal({
         name: "name",
         message: "message",
         type: "input"
      });
      expect(input2).to.deep.equal({
         name: "tool",
         message: "a message",
         type: "input"
      });
   });
});

describe("password prompt object", () => {
   it("should return a password object", () => {
      const password = new Password("name","message","mask");
      const password2 = new Password("password","what is your password","*");

      expect(password).to.deep.equal({
         name: "name",
         message: "message",
         mask: "mask",
         type: "password"
      })
      expect(password2).to.deep.equal({
         name: "password",
         message: "what is your password",
         mask: "*",
         type: "password"
      })
   });
});
