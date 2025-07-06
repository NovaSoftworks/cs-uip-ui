{{- define "ui.name" -}}
  {{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end }}

{{- define "ui.fullname" -}}
  {{- if .Values.fullnameOverride -}}
    {{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
  {{- else -}}
    {{- $name := include "ui.name" . -}}
    {{- printf "%s" $name | trunc 63 | trimSuffix "-" -}}
  {{- end }}
{{- end }}