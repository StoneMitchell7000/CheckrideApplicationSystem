export class StageScheduleEntry {
  public date: Date;
  public time: string;
  public ipName: string;
  public type: string;
  public unit: string;
  public hours: number;
  public ac: string;
  public result: string;

  constructor(obj?: any) {
    this.date = (obj && obj.date) || obj.date || null;
    this.time = (obj && obj.time) || obj.time || null;
    this.ipName = (obj && obj.ip_name) || obj.ipName || null;
    this.type = (obj && obj.type) || obj.type || null;
    this.unit = (obj && obj.unit) || obj.unit || null;
    this.hours = (obj && obj.hours) || obj.hours || null;
    this.ac = (obj && obj.last_activity) || obj.ac || null;
    this.result = (obj && obj.result) || obj.result || null;
  }
}
