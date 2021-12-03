export class Ticket {
  constructor(
    public id: string,
    public desc: string,
    public url: string,
    public subject: string,
    public priority: string,
    public status: string
  ) {}
}
