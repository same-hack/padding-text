import { Pipe, PipeTransform } from '@angular/core';

// パディングのタイプを列挙型で定義
enum PaddingType {
  start = 'start', // 文字列を先頭にパディング
  end = 'end', // 文字列を末尾にパディング
}

@Pipe({
  name: 'paddingText', // パイプの名前を指定
})
export class PaddingTextPipe implements PipeTransform {
  transform(
    value: string | number, // パディングを適用する値（文字列または数値）
    type: string, // パディングのタイプ（startまたはend）
    length: number, // パディング後の文字列の長さ
    fillString: string // パディングに使用する文字列
  ): string {
    let paddedText: string = '';

    // パディングのタイプに応じて処理を分岐
    switch (type) {
      case PaddingType.start:
        // 文字列を先頭にパディング
        paddedText = String(value).padStart(length, fillString);
        break;
      case PaddingType.end:
        // 文字列を末尾にパディング
        paddedText = String(value).padEnd(length, fillString);
        break;
    }

    // パディングされた文字列を返す
    return paddedText;
  }
}
