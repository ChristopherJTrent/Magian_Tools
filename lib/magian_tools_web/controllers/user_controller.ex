defmodule MagianToolsWeb.UserController do
  alias MagianTools.{Repo, User}
  use MagianToolsWeb, :controller

  def index(conn, _params) do
    render(conn, :index, users: Repo.all(User))
  end

  def create(conn, %{"username" => username,
      "email" => email,
      "password" => password}) do
    user = User.changeset(%User{}, %{
      username: username,
      email: email,
      password_digest: Bcrypt.hash_pwd_salt(password),
      session_token: Util.base64Random(Util.sessionTokenLength()),
      permission_level: 0
    })
    IO.inspect(user)
    if user.valid? do
      result = Repo.insert!(user)
      IO.inspect(result)
      render(conn, :show, user: result)
      conn
    end
    conn
  end

end
