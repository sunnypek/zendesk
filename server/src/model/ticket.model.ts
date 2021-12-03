export class Ticket {
  constructor(
    public id: string,
    public description: string,
    public url: string,
    public subject: string,
    public priority: string,
    public status: string,
  ) {}
}
