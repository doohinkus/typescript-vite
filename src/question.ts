const operatorArray: string[] = ["×", "÷", "-", "+"];

interface QuestionResult {
  num1: number;
  num2: number;
  activeOperator: string;
  answer: number;
}

class Operators {
  getRandomOperator(): string {
    return operatorArray[Math.floor(Math.random() * operatorArray.length)];
  }
}

class Question {
  generateRandomInteger(integer: number): number {
    return Math.floor(Math.random() * integer) + 1;
  }

  generateRandomQuestion(): QuestionResult {
    const operators = new Operators();
    const activeOperator = operators.getRandomOperator();
    let num1 = this.generateRandomInteger(20);
    const num2 = this.generateRandomInteger(num1);

    let answer: number;

    switch (activeOperator) {
      case operatorArray[0]: {
        answer = num1 * num2;
        break;
      }
      case operatorArray[1]: {
        num1 = num1 * num2;
        answer = num1 / num2;
        break;
      }
      case operatorArray[2]: {
        answer = num1 - num2;
        break;
      }
      case operatorArray[3]: {
        answer = num1 + num2;
        break;
      }
      default: {
        answer = 0;
      }
    }

    return { num1, num2, activeOperator, answer };
  }
}

export const question = new Question();
