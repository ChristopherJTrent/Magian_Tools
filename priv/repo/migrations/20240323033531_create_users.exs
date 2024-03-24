defmodule MagianTools.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :username, :string
      add :email, :string
      add :password_digest, :string
      add :session_token, :string

      timestamps(type: :utc_datetime)
    end
  end
end
