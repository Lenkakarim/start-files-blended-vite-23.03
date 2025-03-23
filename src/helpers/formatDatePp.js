import { format } from "date-fns";

export const formatDatePp = date => {
    return format(new Date(date), 'Pp');
}