export default class HTTPError extends Error {
  constructor(public statusCode: number, public message: string) {
    super(message);
  }

  get errorMessage() {
    switch (this.statusCode) {
      case 404:
        this.message = '해당 페이지가 없습니다.';
        break;
      default:
        this.message = '알 수 없는 에러입니다.';
    }
    return this.message;
  }
}
