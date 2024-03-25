# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     MagianTools.Repo.insert!(%MagianTools.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

MagianTools.Repo.insert!(%MagianTools.User{
  email: "demo@magian.tools",
  username: "demo",
  password_digest: Bcrypt.hash_pwd_salt("demoPassword!"),
  session_token: Util.base64Random(Util.sessionTokenLength())
})
