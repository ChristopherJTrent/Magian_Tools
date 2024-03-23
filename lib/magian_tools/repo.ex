defmodule MagianTools.Repo do
  use Ecto.Repo,
    otp_app: :magian_tools,
    adapter: Ecto.Adapters.Postgres
end
