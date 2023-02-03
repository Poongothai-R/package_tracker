

export default function statusCheck({status}, seq_id) {
    let seq_no;

    if (status === "order-info-received") seq_no = 1 ;
    else if (status === "ready-for-pickup") seq_no = 2;
    else if (status === "on-the-way") seq_no = 3 ;
    else seq_no = 4;

    /* For classname selection */
    if (seq_id < seq_no) {return "completed";}
    else if (seq_id === seq_no){ return "active" ;}
    else if (seq_id > seq_no){ return "not-active";}
}