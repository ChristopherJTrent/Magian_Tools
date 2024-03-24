defmodule MagianToolsWeb.IndexController do
  use MagianToolsWeb, :controller

  def show(conn, _params) do
    conn
    |> put_resp_header("content-type",
              "text/html; charset=utf-8")
    |> Plug.Conn.send_file(200,
            Application.app_dir(:magian_tools,
                  "priv/static/index.html"))
  end
end
