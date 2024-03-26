defmodule MagianTools.User do
  alias MagianTools.Repo
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

  def get_by_creds(email, password) do
    user = Repo.get_by(MagianTools.User, email: email)
    if user && Bcrypt.verify_pass(password, user.password_digest) do
      user
    else
      nil
    end
  end
  def update_session_token(user) do
    token =  Util.base64Random(Util.sessionTokenLength())
    change = changeset(user, %{session_token: token})
    if change.valid? do
      Repo.update(change)
      token
    else
      update_session_token(user)
    end
  end
end
