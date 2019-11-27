import { Component } from "@angular/core";

import { ObjectQuestionsOrImg, build } from "./objectQuestionsOrImg";
import { RandomiseService } from "../randomise.service";

// import json from "./questions.json";
// import json from "./questionsUrl.json";
import json from "./questionsStr.json";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.sass"]
})
export class TestComponent {
  allQuestions: number;
  jsonQuestionsUrl: string[];
  inputNumber: number;
  novalidRange: boolean;
  arrOfObjQ: [{ isUrl: boolean; strQ: string; imgUrl: string }] | any[];

  constructor(private random: RandomiseService) {
    this.novalidRange = false;
    this.jsonQuestionsUrl = json; // dataJson;
    this.allQuestions = this.jsonQuestionsUrl.length;
    this.arrOfObjQ = [];
  }

  private keyUpNumber(value: number): void {
    this.inputNumber = value;
    if (
      this.inputNumber > 0 &&
      this.inputNumber <= this.jsonQuestionsUrl.length
    ) {
      this.novalidRange = false;
      this.arrOfObjQ = [];
      this.render(this.inputNumber);
    } else {
      this.novalidRange = true;
      this.arrOfObjQ = [];
    }
  }

  private render(numQuestions: number): void {
    const urlChecker = /(http(s?):)([/|.|\w|\s|-])*/i; // \.(?:jpg|gif|png)
    this.random.createNumbers(numQuestions, this.jsonQuestionsUrl.length)
      .forEach(indNumber => {
        const objQ: ObjectQuestionsOrImg = build(false, "", "");
        if (urlChecker.test(this.jsonQuestionsUrl[indNumber])) {
          objQ.isUrl = true;
          objQ.imgUrl = this.jsonQuestionsUrl[indNumber].trim();
          objQ.strQ = "no string question!";
        } else {
          objQ.isUrl = false;
          objQ.strQ = this.jsonQuestionsUrl[indNumber];
          objQ.imgUrl = "no image question!";
        }
        this.arrOfObjQ.push(objQ);
      });
  }
}
