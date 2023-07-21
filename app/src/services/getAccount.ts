import { Account } from "../types/company/account";
import { APIResponse } from "../types/global";

export const getAccountService: () => Promise<
  APIResponse<Account>
> = async () => {
  const resp = await new Promise<APIResponse<Account>>((res, _) => {
    //TODO:-> talk to django be.  for now, mock 👍

    const timeout = setTimeout(() => {
      res(
        false
          ? {
              status: "error",
              message: "ERR_NOT_SIGNED_IN",
            }
          : {
              status: "success",
              message: "ACC_LOGGED_IN",
              data: {
                company_id: "123",
                company_name: "Freeman & Co",
              },
            }
      );
      clearTimeout(timeout);
    }, 1000);
  });

  return resp;
};
