import { Id, toast } from "react-toastify";

const updateToastByHttpStatusCode = (toastId: Id, HttpStatusCode: number) => {
  const toastConfig = getToastConfigByHttpStatusCode(HttpStatusCode);

  toast.update(toastId, {
    type: toastConfig.type,
    isLoading: false,
    render: toastConfig.render,
    delay: 1200,
    autoClose: 1300
  });

  toast.done;
}

const getToastConfigByHttpStatusCode = (statusCode: number) => {

  if (statusCode >= 200 && statusCode <= 299) {
    return {
      type: toast.TYPE.SUCCESS,
      render: "E-mail cadastrado com sucesso!",
    }
  }

  if (statusCode === 409) {
    return {
      type: toast.TYPE.INFO,
      render: "Seu e-mail já está cadastrado :)",
    }
  }

  if (statusCode === 400) {
    return {
      type: toast.TYPE.ERROR,
      render: "Endereço de e-mail inválido",
    }
  }

  return {
    type: toast.TYPE.ERROR,
    render: "Não foi possível cadastrar seu e-mail. Tente novamente!"
  }

}

export default updateToastByHttpStatusCode;