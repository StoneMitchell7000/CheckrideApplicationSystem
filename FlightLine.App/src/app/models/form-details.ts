import { StageScheduleEntry } from './stage-schedule-entry';

export class FormDetails {
  public studentName: string;
  public studentNumber: number;
  public phoneNumber: number;
  public sentToSchedule: Date;
  public instructorName: string;
  public teamNumber: number;
  public lastActivity: Date;
  public tmApproval: string;
  public studentSignatureOne: string;
  public studentSignatureDateOne: string;
  public studentSignatureTwo: string;
  public studentSignatureDateTwo: string;
  public ipName: string;
  public ipSignature: string;
  public ipSignatureDate: string;
  public stageScheduleEntries: StageScheduleEntry[];

  constructor(obj?: any) {
    this.studentName = (obj && obj.student_name) || obj.studentName || null;
    this.studentNumber = (obj && obj.student_number) || obj.studentNumber || null;
    this.phoneNumber = (obj && obj.phone_number) || obj.phoneNumber || null;
    this.sentToSchedule = (obj && obj.sent_to_schedule) || obj.sentToSchedule || null;
    this.instructorName = (obj && obj.instructor_name) || obj.instructorName || null;
    this.teamNumber = (obj && obj.team_number) || obj.teamNumber || null;
    this.lastActivity = (obj && obj.last_activity) || obj.lastActivity || null;
    this.tmApproval = (obj && obj.tm_approval) || obj.tmApproval || null;
    this.studentSignatureOne = (obj && obj.student_signature_one) || obj.studentSignatureOne || null;
    this.studentSignatureDateOne = (obj && obj.student_signature_date_one) || obj.studentSignatureDateOne || null;
    this.studentSignatureTwo = (obj && obj.student_signature_two) || obj.studentSignatureTwo || null;
    this.studentSignatureDateTwo = (obj && obj.student_signature_date_two) || obj.studentSignatureDateTwo || null;
    this.ipName = (obj && obj.ip_name) || obj.ipName || null;
    this.ipSignature = (obj && obj.ip_signature) || obj.ipSignature || null;
    this.ipSignatureDate = (obj && obj.ip_signature_date) || obj.ipSignatureDate || null;
    this.stageScheduleEntries = obj && obj.stage_schedule_entries || obj.stageScheduleEntries || new Array<StageScheduleEntry>();

    for (let i = 0; i < 6; i++) {
      this.stageScheduleEntries.push(new StageScheduleEntry({}));
    }
  }
}
