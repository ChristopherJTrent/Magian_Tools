defmodule MagianToolsWeb.UserController do
  alias MagianTools.{Repo, User}
  use MagianToolsWeb, :controller

  def index(conn, _params) do
    conn
    |> render(Repo.get_by(User, username: "demo"))
  end
end
