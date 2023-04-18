import { StageScheduleEntry } from './stage-schedule-entry';

export class FormDetails {
  public checkrideId: number;

  public tmApprovalSig: string;
  public tmApprovalRemarks: string;
  public tmApprovalDate: Date;
  public roApprovalSig: string;
  public roApprovalDate: Date;

  public studentName: string;
  public studentNumber: number;
  public phoneNumber: number;
  public sentToSchedule: Date;
  public instructorName: string;
  public teamNumber: number;
  public lastActivity: Date;
  public tmApproval: string;
  public formRemarks: string;
  public studentSignatureOne: string;
  public studentSignatureDateOne: string;
  public studentSignatureTwo: string;
  public studentSignatureDateTwo: string;
  public ipName: string;
  public ipSignature: string;
  public ipSignatureDate: string;
  public stageScheduleEntries: StageScheduleEntry[];

  constructor(obj?: any) {
    this.checkrideId = obj && obj.checkride_id || obj.checkrideId || null;

    this.tmApprovalSig = obj && obj.tm_approval_sig || obj.tmApprovalSig || null;
    this.tmApprovalRemarks = obj && obj.tm_approval_remarks || obj.tmApprovalRemarks || null;
    this.tmApprovalDate = obj && obj.tm_approval_date || obj.tmApprovalDate || null;
    this.roApprovalSig = obj && obj.ro_approval_sig || obj.roApprovalSig || null;
    this.roApprovalDate = obj && obj.ro_approval_date || obj.roApprovalDate || null;

    this.studentName = (obj && obj.student_name) || obj.studentName || null;
    this.studentNumber =
      (obj && obj.student_number) || obj.studentNumber || null;
    this.phoneNumber = (obj && obj.phone_number) || obj.phoneNumber || null;
    this.sentToSchedule =
      (obj && obj.sent_to_schedule) || obj.sentToSchedule || null;
    this.instructorName =
      (obj && obj.instructor_name) || obj.instructorName || null;
    this.teamNumber = (obj && obj.team_number) || obj.teamNumber || null;
    this.lastActivity = (obj && obj.last_activity) || obj.lastActivity || null;
    this.tmApproval = (obj && obj.tm_approval) || obj.tmApproval || null;
    this.formRemarks = (obj && obj.form_remarks) || obj.formRemarks || null;
    this.studentSignatureOne =
      (obj && obj.student_signature_one) || obj.studentSignatureOne || null;
    this.studentSignatureDateOne =
      (obj && obj.student_signature_date_one) ||
      obj.studentSignatureDateOne ||
      null;
    this.studentSignatureTwo =
      (obj && obj.student_signature_two) || obj.studentSignatureTwo || null;
    this.studentSignatureDateTwo =
      (obj && obj.student_signature_date_two) ||
      obj.studentSignatureDateTwo ||
      null;
    this.ipName = (obj && obj.ip_name) || obj.ipName || null;
    this.ipSignature = (obj && obj.ip_signature) || obj.ipSignature || null;
    this.ipSignatureDate =
      (obj && obj.ip_signature_date) || obj.ipSignatureDate || null;
    this.stageScheduleEntries =
      (obj && obj.stage_schedule_entries) ||
      obj.stageScheduleEntries ||
      new Array<StageScheduleEntry>();

    for (let i = 0; i < 6; i++) {
      this.stageScheduleEntries.push(new StageScheduleEntry({}));
    }
  }
}
