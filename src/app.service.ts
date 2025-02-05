import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ENVIRONMENT } from './common/configs/environment';
import { NUMBER_PROPERTIES } from './common/constants/number-constant';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async classifyNumber(number: number) {
    if (!number || isNaN(Number(number)) || !Number.isInteger(Number(number))) {
      throw new BadRequestException({
        number: 'alphabet',
        error: true,
      });
    }

    // Calculate Prime number
    let isPrime = true;
    if (number <= 1) {
      isPrime = false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    // Calculate Perfect number
    let sum = 1;
    let isPerfect = false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        sum += i;
        if (i !== number / i) sum += number / i;
      }
    }
    isPerfect = sum === number;

    const properties: string[] = [];

    // Calculate Armstrong number and get the number properties[armstrong, even, odd]
    const digits = String(number).split('');
    const power = digits.length;

    sum = digits.reduce((acc, digit) => {
      return acc + Math.pow(parseInt(digit), power);
    }, 0);

    const isArmstrong = Number(sum) === Number(number);

    if (isArmstrong) {
      properties.push(NUMBER_PROPERTIES.armstrong);
    }
    properties.push(
      number % 2 === 0 ? NUMBER_PROPERTIES.even : NUMBER_PROPERTIES.odd,
    );

    // Calculate digit sum
    const digitSum = String(number)
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);

    // Get fun fact
    let funFact = '';
    const response = await this.httpService.axiosRef.get<string>(
      `${ENVIRONMENT.NUMBERS.API}/${number}/math`,
    );
    funFact = response.data;

    return {
      number,
      is_prime: isPrime,
      is_perfect: isPerfect,
      properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    };
  }
}
