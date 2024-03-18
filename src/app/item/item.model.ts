export class Item {
  id: number;
  name: string;
  description: string;
  is_enabled: boolean;

  constructor(id: number, name: string, description: string, is_enabled: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.is_enabled = is_enabled;
  }
}
