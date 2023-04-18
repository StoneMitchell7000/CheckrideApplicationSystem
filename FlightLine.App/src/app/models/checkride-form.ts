export class CheckrideForm {
    public checkrideId: number;
    public studentName: string;
    public studentId: number;
    public status: string;
    public dateCreated: Date;

    constructor(obj?: any) {
        this.checkrideId = obj && obj.checkride_id || obj.checkrideId || null;
        this.studentName = obj && obj.student_name || obj.studentName || null;
        this.studentId = obj && obj.student_id || obj.studentId || null;
        this.status = obj && obj.status || obj.status || null;
        this.dateCreated = obj && obj.date_created || obj.dateCreated || null;
    }

    get formatStatus(): any {
        if (this.status) {
            let words = this.status.split(" ");
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
            return words.join(" ");
        }
    }
}
