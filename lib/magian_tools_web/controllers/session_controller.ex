defmodule MagianToolsWeb.SessionController do
  alias MagianTools.{Repo, User}
  use MagianToolsWeb, :controller



  def index(conn, _params) do
    conn = fetch_session(conn)
    token = get_session(conn, :session_token)
    if token do
      user = Repo.get_by(User, session_token: token)
      if user do
        conn
        |> render(:show, user: user)
      else
        resp(conn, 422, "")
      end
    else
      resp(conn, 422, "")
    end
  end
  def create(conn, %{"email" => email, "password" => password}) do
    user = User.get_by_creds(email, password)
    if user do
      conn
      |> fetch_session()
      |> put_session(:session_token, User.update_session_token(user))
    end
  end
end
