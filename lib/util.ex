defmodule Util do
  def sessionTokenLength, do: 16
  def base64Random(length) do
    :crypto.strong_rand_bytes(length)
      |> Base.url_encode64()
      |> binary_part(0, length)
  end
end
