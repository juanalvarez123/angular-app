export class Server {

  public type: string;
  public name: string;
  public content: string;
  public status: string;

  constructor(type: string, name: string, content: string) {
    this.type = type;
    this.name = name;
    this.content = content;
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }
}
