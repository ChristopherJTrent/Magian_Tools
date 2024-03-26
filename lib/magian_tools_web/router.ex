defmodule MagianToolsWeb.Router do
  use MagianToolsWeb, :router

  pipeline :api do
    plug :accepts, ["json"]

  end

  scope "/api", MagianToolsWeb do
    pipe_through :api
    resources "/users", UserController, except: [:new, :edit]
    resources "/login", SessionController, only: [:create]
    resources "/session", SessionController, only: [:index]

  end
  get "/", MagianToolsWeb.IndexController, :show
  get "/:path", MagianToolsWeb.IndexController, :show

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:magian_tools, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      live_dashboard "/dashboard", metrics: MagianToolsWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
