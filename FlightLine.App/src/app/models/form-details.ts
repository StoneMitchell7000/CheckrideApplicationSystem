import { stageScheduleEntry } from "./stage-schedule-entry";

export class FormDetails {
  public studentName: string;
  public studentNumber: number;
  public phoneNumber: number;
  public sentToSchedule: Date;
  public instructorName: string;
  public teamNumber: number;
  public lastActivity: Date;
  public tmApproval: string;
  // public stageScheduleEntries: stageScheduleEntry[];

  constructor(obj?: any) {
    this.studentName = obj && obj.student_name || obj.studentName || null;
    this.studentNumber = obj && obj.student_number || obj.studentNumber || null;
    this.phoneNumber = obj && obj.phone_number || obj.phoneNumber || null;
    this.sentToSchedule = obj && obj.sent_to_schedule || obj.sentToSchedule || null;
    this.instructorName = obj && obj.instructor_name || obj.instructorName || null;
    this.teamNumber = obj && obj.team_number || obj.teamNumber || null;
    this.lastActivity = obj && obj.last_activity || obj.lastActivity || null;
    this.tmApproval = obj && obj.tm_approval || obj.tmApproval || null;
  }
}
