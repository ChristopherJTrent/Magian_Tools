defmodule MagianToolsWeb.CSRFController do
  alias MagianTools.{Repo, User}
  use MagianToolsWeb, :controller

  def index(conn, _params) do
    session = get_session(conn, :session_token)
    unless session && Repo.get_by(User, session_token: session) do
      token = Plug.CSRFProtection.get_csrf_token()
      json(conn, %{csrf_token: token})
    else
      resp(conn, 403, "you cannot get a new csrf token if you're logged in.")
    end
  end
end
