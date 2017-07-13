import java.net.InetSocketAddress
import play.sbt.PlayRunHook
import sbt._

object Webpack {
  def apply(base: File): PlayRunHook = {
    object WebpackHook extends PlayRunHook {

      var process: Option[Process] = None

      // https://github.com/nouhoum/play-react-webpack/issues/2
      // Use sh in place of cmd for Linux
      override def beforeStarted() = {
        Process("cmd /c \"webpack\"", base).run()
      }

      override def afterStarted(addr: InetSocketAddress) = {
        process = Option(
          Process("cmd /c \"webpack --watch\"", base).run()
        )
      }

      override def afterStopped() = {
        process.map(p => p.destroy())
        process = None
      }
    }

    WebpackHook
  }
}
