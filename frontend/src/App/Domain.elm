module App.Domain where

import Json.Decode exposing (succeed, list, string, (:=))
import Json.Decode.Extra exposing ((|:))

type alias ApplicationGroup = { applicationId : String, appInfo : List Application }

type alias Application = { applicationId : String, ip : String }

applicationDecoder =
    succeed Application
        |: ( "applicationId" := string)
        |: ( "ip" := string)

applicationGroupDecoder =
    succeed ApplicationGroup
        |: ( "applicationId" := string)
        |: ( "applications" := (list applicationDecoder))