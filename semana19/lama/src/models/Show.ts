import { Moment } from 'moment';
import { Band } from './Band';

export class Show {
    constructor(
        private id: string,
        private weekDay: string,
        private startTime: Moment,
        private endTime: Moment,
        private band: Band
    ) {}

    public getId(): string {
        return this.id;
    }

    public getWeekDay(): string {
        return this.weekDay;
    }

    public getStartTime(): Moment {
        return this.startTime;
    }

    public getEndTime(): Moment {
        return this.endTime;
    }

    public getBand(): Band {
        return this.band;
    }
}