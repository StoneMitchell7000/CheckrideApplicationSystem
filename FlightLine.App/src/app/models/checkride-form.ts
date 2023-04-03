export class CheckrideForm {
    public checkrideId: number;
    public studentName: string;
    public studentId: number;
    public status: string;
    public details: string;
    public dateCreated: Date;

    constructor(obj?: any) {
        this.checkrideId = obj && obj.checkride_id || obj.checkrideId || null;
        this.studentName = obj && obj.student_name || obj.studentName || null;
        this.studentId = obj && obj.student_id || obj.studentId || null;
        this.status = obj && obj.status || obj.status || null;
        this.details = obj && obj.details || obj.details || null;
        this.dateCreated = obj && obj.date_created || obj.dateCreated || null;
    }

    get formatStatus(): any {
        if (this.status) {
            return this.status.charAt(0).toUpperCase() + this.status.slice(1);
        }
    }
}
