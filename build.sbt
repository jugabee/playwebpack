import play.sbt.PlayRunHook
import sbt._

name := """play-scala-starter-example"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala, SbtWeb)

resolvers += Resolver.sonatypeRepo("snapshots")

scalaVersion := "2.12.2"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.0.0" % Test
libraryDependencies += "com.h2database" % "h2" % "1.4.194"
libraryDependencies += "org.postgresql" % "postgresql" % "9.4-1201-jdbc41"

// PlayKeys.playRunHooks += Webpack(baseDirectory.value)
//
// lazy val webpack = taskKey[Unit]("Run webpack when packaging the application")
//
// def runWebpack(file: File) = {
//   Process("webpack", file) !
// }
//
// webpack := {
//   if(runWebpack(baseDirectory.value) != 0) throw new Exception("Something goes wrong when running webpack.")
// }
//
// dist := (dist dependsOn webpack).value
//
// stage := (stage dependsOn webpack).value
//
// test := ((test in Test) dependsOn webpack).value

pipelineStages := Seq(digest, gzip)
