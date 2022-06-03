enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = 'p',
  FAILED = 'f',
}

// 1 - успех
// 'p' - в процессе
// 'f' - отклонён

const res = {
  message: 'Платёж успешен',
  statusCode: StatusCode.SUCCESS,
};

if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status: StatusCode) {}

action(StatusCode.SUCCESS);

const enum Roles {
  ADMIN = 1,
  USER = 2,
}

const res2 = Roles.ADMIN;
