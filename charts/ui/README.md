# Nova Softworks - User Identity Platform (UIP) UI chart

This Helm chart deploys the Nova Softworks UIP user interface on a Kubernetes cluster. It is intended to be used with Argo CD or any GitOps workflow and is configured to serve the UI behind an optional Ingress.

## Application overview

This chart deploys a SvelteKit-based frontend application built for Nova Softworks self service user account management. For all available options, please check the values.yaml file of the chart.

### Environment variables

- `PUBLIC_BASE_URL`: **Required**. This must be the public URL where the application will be served (e.g., `https://account.novasoftworks.com`). This value must be set via the `deployment.env` list in your values file.

Example:

```yaml
deployment:
  env:
    - name: PUBLIC_BASE_URL
      value: https://account.novasoftworks.com
```

See the [main project README](../../README.md) for all environment variables documentation.

## Ingress configuration

To expose the application externally, enable Ingress and configure its properties:

```yaml
ingress:
  enabled: true
  className: nginx
  host: account.novasoftworks.com
  annotations:
    nginx.ingress.kubernetes.io/backend-protocol: 'HTTP'
    nginx.ingress.kubernetes.io/force-ssl-redirect: 'true'
    cert-manager.io/cluster-issuer: 'letsencrypt-prod'
  tls:
    enabled: true
    secretName: ui-tls
```

This example assumes you're using `nginx-ingress` and `cert-manager` for TLS provisioning, but other setups are supported.

## Image pull secrets (GHCR authentication)

The default Docker image used in this chart is hosted on GitHub Container Registry (GHCR):

```yaml
image:
  repository: ghcr.io/novasoftworks/csuipui
  tag: 0.1.0
  pullPolicy: IfNotPresent
```

Even for public images, GHCR **requires authentication** in Kubernetes clusters. You must provide an image pull secret and reference it in your `values.yaml`:

```yaml
deployment:
  imagePullSecrets:
    - name: ghcr-auth
```

## Health checks (probes)

You can define readiness and liveness probes to help Kubernetes monitor the health of the application pods:

```yaml
deployment:
  readinessProbe:
    enabled: true

  livenessProbe:
    enabled: true
```

## Notes

- This chart is intended for internal Nova Softworks use.
- It assumes `cert-manager` and `nginx-ingress` are already installed in your cluster.
- No persistent storage is required for the UIP user interface.
