defmodule MagianToolsWeb.UserController do
  alias MagianTools.{Repo, User}
  use MagianToolsWeb, :controller

  def index(conn, _params) do
    render(conn, :index, users: Repo.all(User))
  end
end
