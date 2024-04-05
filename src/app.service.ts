import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getAnimalsHtml(): string {
    try {
      const htmlContent = fs.readFileSync('public/index.html', 'utf8');
      return htmlContent;
    } catch (error) {
      console.error('Error reading HTML file:', error);
      return 'Error reading HTML file';
    }
  }
}