// basic form model
export interface question {
  key: string;
  label: string;
  type: string;
  required: boolean;
}

// intermidiate from model
export interface sujalquestion {
  key: string;
  label: string;
  type: 'text' | 'email' | 'number';
  required: boolean;
}

interface commonattr {
  key: string;
  label: string;
  required: boolean;
}


interface InputField extends commonattr {
  type: 'text' | 'email' | 'number';
}

interface selectfield extends commonattr {
  type: 'select';
  selectdata: { skey: string; svalue: string }[];
}

export type selfmade  = InputField | selectfield;
