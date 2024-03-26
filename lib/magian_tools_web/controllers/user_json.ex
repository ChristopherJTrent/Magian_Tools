defmodule MagianToolsWeb.UserJSON do
  alias MagianTools.User

  def index(%{users: users}) do
    %{data: for(user <- users, do: data(user))}
  end
  def show(%{user: user, csrf: csrf}) do
    %{user: data(user), csrf_token: csrf}
  end

  defp data(%User{} = user) do
    %{
      username: user.username,
      email: user.email,
      session_token: user.session_token,
      permission_level: user.permission_level
    }
  end
end
