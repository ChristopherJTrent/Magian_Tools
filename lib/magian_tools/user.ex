defmodule MagianTools.User do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "users" do
    field :username, :string
    field :email, :string
    field :password_digest, :string
    field :session_token, :string
    field :permission_level, :integer

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :email, :password_digest, :session_token, :permission_level])
    |> validate_required([:username, :email, :password_digest, :session_token, :permission_level])
  end
end
