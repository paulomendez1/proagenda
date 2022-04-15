export interface Appointment {
    doctorId : number;
    patientid : number;
    time : Date;
}

export interface DoctorWorkHours {
    doctorId : number;
    startTime : number;
    endTime : number;
}
