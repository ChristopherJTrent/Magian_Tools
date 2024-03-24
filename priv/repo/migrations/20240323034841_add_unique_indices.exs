defmodule MagianTools.Repo.Migrations.AddUniqueIndices do
  use Ecto.Migration

  def change do
    create unique_index(:users, :username)
    create unique_index(:users, :email)
    create unique_index(:users, :session_token)
  end
end
